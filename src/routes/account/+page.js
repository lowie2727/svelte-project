import { checkUserStatus, fetchUserProfile } from "$lib/utils/auth";
import { redirect } from "@sveltejs/kit";

export async function load() {
  let userProfile = null;
  let errorMessage = null;

  const user = await checkUserStatus();

  if (user) {
    userProfile = await fetchUserProfile(user.id);
    if (!userProfile) {
      errorMessage = "Failed to fetch user profile.";
    }
  } else {
    throw redirect(302, "/login");
  }

  return {
    user,
    userProfile,
    errorMessage,
  };
}
