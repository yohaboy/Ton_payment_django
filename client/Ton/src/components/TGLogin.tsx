import { LoginButton } from "@telegram-auth/react";

function TGLogin() {
  return (
    <div>
      <LoginButton
        botUsername="supaluba_bot"
        onAuthCallback={(user) => {
          console.log("Telegram user:", user);
        }}
        buttonSize="large"
        showAvatar={true}
        cornerRadius={10}
        lang="en"
      />
    </div>
  );
}

export default TGLogin;
