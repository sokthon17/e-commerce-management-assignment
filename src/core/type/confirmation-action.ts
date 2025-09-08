export type ConfirmationActionProps = {
  cancel: {
    label: string;
    action: () => void;
  };
  process: {
    icon?: string;
    label: string;
    action: () => void;
  };
};
