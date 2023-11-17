import React from "react";
import { useSelector } from "react-redux";

export default function RecentActivities() {
  const recentActivities = useSelector(
    (state) => state.transaction.recentActivities
  );
  return (
    <div>
      <div>
        {recentActivities.map((recent) => (
          <div className="mx-10" key={recent.recentId}>
            <div className="flex space-x-3">
                <p>{recent.recentId}. </p>
              <p>
               {recent.recentExpenseValue}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
