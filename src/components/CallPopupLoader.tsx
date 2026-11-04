"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

// The popup chunk is only fetched when it is about to be shown.
const CallPopup = dynamic(() => import("./CallPopup"), { ssr: false });
const KEY = "soh-call-popup";

export function CallPopupLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
    } catch {}
    let ready = false;
    let done = false;
    // Never overlap the cookie banner: wait until the visitor has chosen Accept or Decline.
    const consentChosen = () => {
      try { return Boolean(localStorage.getItem("soh-consent")); } catch { return true; }
    };
    const maybeShow = () => {
      if (done || !ready || !consentChosen()) return;
      done = true;
      cleanup();
      setShow(true);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.4) { ready = true; maybeShow(); }
    };
    const timer = window.setTimeout(() => { ready = true; maybeShow(); }, 25000);
    const poll = window.setInterval(maybeShow, 1000);
    function cleanup() {
      window.clearTimeout(timer);
      window.clearInterval(poll);
      window.removeEventListener("scroll", onScroll);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return cleanup;
  }, []);

  const close = useCallback(() => {
    setShow(false);
    try { sessionStorage.setItem(KEY, "1"); } catch {}
  }, []);

  return show ? <CallPopup onClose={close} /> : null;
}
