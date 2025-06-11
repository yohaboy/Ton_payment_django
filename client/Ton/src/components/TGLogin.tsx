import { LoginButton } from "@telegram-auth/react";
import type { TelegramUser } from "../shared/types";

interface TGLoginProps {
  onAuth: (user: TelegramUser) => void;
}

function TGLogin({ onAuth }: TGLoginProps) {
  return (
    <LoginButton
      botUsername="supaluba_bot"
      onAuthCallback={(user) => {
        console.log("Telegram user:", user);
        onAuth(user);
      }}
      buttonSize="large"
      showAvatar={true}
      cornerRadius={10}
      lang="en"
    />
  );
}

export default TGLogin;
