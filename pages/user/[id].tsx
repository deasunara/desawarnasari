import { useRouter } from 'next/router';

export default function UsersDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>
        user detail
        { }
        {id}
        { }
      </p>
    </div>
  );
}
