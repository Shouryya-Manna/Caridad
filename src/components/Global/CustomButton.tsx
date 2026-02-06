import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type CustomButtonProps = {
  buttonName: string;
  className?: string;
};

export default function CustomButton({
  buttonName,
  className,
}: CustomButtonProps) {
  return (
    <>
      <Button
        className={cn(
          "cursor-pointer text-[16px] font-[650] hover:bg-sea-serpent hover:text-white rounded-4xl border border-salmon text-white bg-salmon focus-visible:ring-0 focus-visible:ring-offset-0",
          className
        )}
      >
        {buttonName}
      </Button>
    </>
  );
}
