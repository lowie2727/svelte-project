import { supabase } from "$lib/supabaseClient.js";

export async function login(username, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email: username,
    password: password,
  });

  if (error) {
    throw new Error("Login failed: " + error.message);
  }
}

export async function logout() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error("Logout failed: " + error.message);
    }
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
}

export async function signUpNewUser(email, password) {
  try {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      return {
        errorStatus: true,
        errorMessage: error.message,
      };
    } else {
      return {
        errorStatus: false,
        errorMessage: "Please check your email to confirm your account",
      };
    }
  } catch (error) {
    console.error("Sign-up error:", error);
    return {
      errorStatus: true,
      errorMessage: "An unexpected error occurred.",
    };
  }
}

export async function checkUserStatus() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.error("Error checking user status:", error);
    return null;
  }
}

export async function fetchUserProfile(userId) {
  try {
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (profileError) {
      console.error("Error fetching user profile:", profileError);
      return null;
    }

    return profileData;
  } catch (error) {
    console.error("Unexpected error fetching user profile:", error);
    return null;
  }
}

export async function updateProfile(userId, firstName, lastName) {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .update({
        first_name: firstName,
        last_name: lastName,
      })
      .eq("id", userId);

    if (error) {
      return {
        errorStatus: true,
        errorMessage: error.message,
      };
    }

    return {
      errorStatus: false,
      errorMessage: "Success",
    };
  } catch (error) {
    console.error("Error updating profile:", error);
    return {
      errorStatus: true,
      errorMessage: "An unexpected error occurred.",
    };
  }
}
