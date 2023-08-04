import { useState, useEffect } from 'react';

function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleMatchChange = (e) => {
      setMatches(e.matches);
    };

    mediaQuery.addListener(handleMatchChange);

    return () => {
      mediaQuery.removeListener(handleMatchChange);
    };
  }, [query]);

  return matches;
}

export default useMedia;
