import { SuccessMessage } from "@/app/form/modern/components/SuccessMessage";
import { DangerMessage } from "@/app/form/modern/components/DangerMessage";

interface Props {
  message: string | null;
  success: boolean | null;
}

export function ResultMessage({ message, success }: Props) {
  if (success === null || !message) return null;

  return success ? (
    <SuccessMessage>{message}</SuccessMessage>
  ) : (
    <DangerMessage>{message}</DangerMessage>
  );
}
