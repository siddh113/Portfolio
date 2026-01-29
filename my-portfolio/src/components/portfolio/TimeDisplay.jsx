import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function TimeDisplay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      hour12: true 
    });
  };

  const getTimezone = () => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Extract abbreviation (e.g., "America/New_York" -> "ET")
    const abbreviations = {
      'America/New_York': 'ET',
      'America/Chicago': 'CT',
      'America/Denver': 'MT',
      'America/Los_Angeles': 'PT',
      'Europe/London': 'GMT',
      'Europe/Paris': 'CET',
      'Asia/Tokyo': 'JST',
    };
    return abbreviations[timezone] || 'Local';
  };

  return (
    <div className="flex items-center gap-2 text-zinc-400">
      <Clock className="w-3.5 h-3.5" />
      <span className="text-sm font-light">
        {formatTime(time)} {getTimezone()}
      </span>
    </div>
  );
}