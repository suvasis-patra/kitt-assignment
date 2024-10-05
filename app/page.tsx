import { ComboboxDemo } from "@/components/shared/ComboBox";
import { DatePicker } from "@/components/shared/DatePicker";
import { SearchCard } from "@/components/shared/SearchCard";
import { MoveLeft, MoveRight } from "lucide-react";

function FromTo() {
  return (
    <div className="inline-flex flex-col justify-center items-center size-10 rounded-full bg-zinc-100 text-black">
      <span>
        <MoveLeft className="h-4 w-6" />
        <MoveRight className="h-4 w-6" />
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mt-24">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl">Good afternoon, Brian</h1>
        </div>
        <div className="mt-12">
          <SearchCard>
            <div className="flex justify-between">
              <div className="flex gap-6 items-center">
                <ComboboxDemo defaultText="Where from?" className="-mr-3" />
                <FromTo />
                <ComboboxDemo defaultText="Where to?" className="-ml-3" />
              </div>
              <div className="flex gap-4 items-center">
                <DatePicker defaultLabel="Departure" />
                <DatePicker defaultLabel="Return" />
              </div>
            </div>
          </SearchCard>
        </div>
      </div>
    </main>
  );
}
