import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';

import NewUserForm, { type TFormSchema } from './NewUserForm';
import useBoundStore from '@/store';

const AuthSignup: React.FC = () => {
  const signup = useBoundStore((store) => store.signup);
  const setAlert = useBoundStore((store) => store.setAlert);
  const router = useRouter();

  const NewUserMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      setAlert({ type: 'success', message: data.message });
      router.replace('/profile');
    },
    onError: () => {
      setAlert({
        type: 'error',
        message: 'authentication unsuccessful',
      });
    },
  });

  const submitHandler = (data: TFormSchema) => {
    NewUserMutation.mutate(data);
  };

  return (
    <div className="w-full max-w-[500px] mx-auto p-10 border-[1px] rounded-lg text-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Create an account</h1>
      </div>
      <NewUserForm onSubmit={submitHandler} />
      <div className="my-5 text-base text-center">
        <p>
          Already got an account?
          <Link className="ml-1.5 text-base underline font-bold" href="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthSignup;
