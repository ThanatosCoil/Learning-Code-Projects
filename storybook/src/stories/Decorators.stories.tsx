import Decorators from "./Decorators";

export default {
  title: "Decorators",
  component: Decorators,
};

export const Default = {
  args: {
    label: "Default",
    color: "#007bff",
    disabled: false,
  },

  //Variants only for this Default, not gonna apply for disabled. To aply for both, place it above in export default
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Disabled = {
  args: {
    label: "Disabled",
    color: "#007bff",
    disabled: true,
  },
};
