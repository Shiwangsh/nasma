import { Routes, Route } from "react-router-dom";
import "./globals.css";
import SignInForm from "./_auth/forms/SignInForm";
import {
  Home,
  Explore,
  AllUsers,
  CreatePost,
  EditPost,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
  LikedPosts,
} from "./_root/pages";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLaytout from "./_auth/AuthLaytout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLaytout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update/profile/:id" element={<UpdateProfile />} />
          <Route path="/liked-posts" element={<LikedPosts />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
