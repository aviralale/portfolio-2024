import React, { useState, useEffect } from "react";

export default function DaysSince() {
  const [timeSince, setTimeSince] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2022-09-11T00:00:00");

    const calculateTimeSince = () => {
      const now = new Date();
      let years = now.getFullYear() - targetDate.getFullYear();
      let months = now.getMonth() - targetDate.getMonth();

      if (months < 0) {
        years -= 1;
        months += 12;
      }
      const lastYearDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        targetDate.getDate()
      );

      let days = Math.floor((now - lastYearDate) / (1000 * 60 * 60 * 24));

      if (days < 0) {
        months -= 1;
        if (months < 0) {
          years -= 1;
          months += 12;
        }
        const previousMonthDate = new Date(
          now.getFullYear(),
          now.getMonth() - 1,
          targetDate.getDate()
        );
        days = Math.floor((now - previousMonthDate) / (1000 * 60 * 60 * 24));
      }

      setTimeSince({ years, months, days });
    };

    calculateTimeSince();
    const intervalId = setInterval(calculateTimeSince, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card h-full flex justify-center flex-col gap-4 p-4 border border-gray-500/50 rounded-3xl">
      <p className="text-SM opacity-70">SINCE I'VE BEEN CODING</p>
      <div className="text-lg">
        <p className="text-center text-sm">
          <span className="text-7xl font-bold">{timeSince.years}</span>
          <span className="opacity-70"> years</span>
          <span className="text-7xl font-bold">{timeSince.months}</span>
          <span className="opacity-70">months</span>
          <span className="text-7xl font-bold">{timeSince.days}</span>
          <span className="opacity-70">days</span>
        </p>
      </div>
    </div>
  );
}
