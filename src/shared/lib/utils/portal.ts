
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
}

export const Portal = ({ children, container }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    // If a container is not provided, create a new div element and append it to the body.
    // Otherwise, use the provided container.
    if (!container) {
      const element = document.createElement('div');
      document.body.appendChild(element);
      setPortalNode(element);
      return () => {
        document.body.removeChild(element);
      };
    } else {
      setPortalNode(container);
    }
  }, [container]);

  if (!mounted || !portalNode) {
    return null;
  }

  return createPortal(children, portalNode);
};
