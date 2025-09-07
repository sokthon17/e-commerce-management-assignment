export type ConfirmationActionProps = {
  cancel: {
    label: string;
    action: () => void;
  };
  process: {
    label: string;
    action: () => void;
  };
};
