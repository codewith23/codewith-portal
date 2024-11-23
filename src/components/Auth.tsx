import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { supabase } from "@/lib/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Auth = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 gradient-text">
        ログイン / 新規登録
      </h1>
      <SupabaseAuth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#eb6100',
                brandAccent: '#d55600',
              },
            },
          },
        }}
        localization={{
          variables: {
            sign_in: {
              email_label: 'メールアドレス',
              password_label: 'パスワード',
              button_label: 'ログイン',
            },
            sign_up: {
              email_label: 'メールアドレス',
              password_label: 'パスワード',
              button_label: '新規登録',
            },
          },
        }}
        providers={[]}
      />
    </div>
  );
};

export default Auth;