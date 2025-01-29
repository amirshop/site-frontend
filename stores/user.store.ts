export const useUserStore = defineStore("user", () => {
  const user = ref({});
  const users = ref({});
  const getUsers = async () => {
    const { data } = await useFetch("/api/users");
    users.value = data.value;
  };
  return { user, users, getUsers };
});

