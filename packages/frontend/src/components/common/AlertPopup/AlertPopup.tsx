import { Alert } from '@/components/ui/Alert';
import useBoundStore from '@/store';

const AlertPopup = () => {
  const alert = useBoundStore((store) => store.alert);

  if (!alert.message) return null;

  return (
    <section className="sticky top-8 left-0 z-50">
      {alert.type && alert.message ? (
        <Alert type={alert.type} message={alert.message} />
      ) : null}
    </section>
  );
};

export default AlertPopup;
