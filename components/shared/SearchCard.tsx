import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
}

export const SearchCard = ({ children }: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <span className="bg-gray-100 py-3 px-10 rounded-md font-semibold text-gray-800">
            Flights
          </span>
        </div>
      </CardHeader>
      <CardContent className="mt-4">{children}</CardContent>
      <CardFooter className="mt-4">
        <div className="flex w-full justify-end items-center">
          <Button
            size={"lg"}
            className="bg-zinc-800 text-md px-16 py-6 inline-flex items-center gap-2"
          >
            <Search className="size-4 text-white" />
            <span className="text-lg">Search flights</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
