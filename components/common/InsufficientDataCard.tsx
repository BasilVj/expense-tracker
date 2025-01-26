import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const InsufficientDataCard = () => {
  return (
    <Card
      className="mt-4 dark:bg-[#0f172a] 
    bg-[#f1f5f9] border border-[#E5E7EB] dark:border-[#334155]"
    >
      <CardHeader>
        <CardTitle>Insufficient Data</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Charts are displayed when transactions data is available for at least
          two months.
        </p>
      </CardContent>
    </Card>
  );
};

export default InsufficientDataCard;
