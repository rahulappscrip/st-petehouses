const scrollState = {
  maxScrollDepth: 0,
  milestones: {
    25: false,
    50: false,
    75: false,
    100: false,
  } as Record<number, boolean>,
};

export function updateScrollDepth(): number {
  if (typeof window === "undefined") return 0;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const depth = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

  if (depth > scrollState.maxScrollDepth) {
    scrollState.maxScrollDepth = depth;
  }

  [25, 50, 75, 100].forEach((milestone) => {
    if (depth >= milestone) {
      scrollState.milestones[milestone] = true;
    }
  });

  return depth;
}

export function getScrollState() {
  return {
    scroll_depth: scrollState.maxScrollDepth,
    scroll_25: scrollState.milestones[25] || false,
    scroll_50: scrollState.milestones[50] || false,
    scroll_75: scrollState.milestones[75] || false,
    scroll_100: scrollState.milestones[100] || false,
  };
}

export function resetScrollState(): void {
  scrollState.maxScrollDepth = 0;
  scrollState.milestones = { 25: false, 50: false, 75: false, 100: false };
}
