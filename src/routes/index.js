import React from 'react';
import Home from "views/Home";
const SignIn = React.lazy(() => import('views/SignIn'));
const SignUp = React.lazy(() => import('views/SignUp'));
const Workouts = React.lazy(() => import('views/Workouts'));
const WorkoutPlans = React.lazy(() => import('views/WorkoutPlans'));
const Topics = React.lazy(() => import('views/Topics'));
const Coaches = React.lazy(() => import('views/Coaches')); 
const Admin = React.lazy(() => import('views/Admin')); 
const Pricing = React.lazy(() => import('views/Pricing')); 
const CoachApproval = React.lazy(() => import('views/CoachApproval')); 
const ForgotPassword = React.lazy(() => import('views/ForgotPassword')); 
const ResetPassword = React.lazy(() => import('views/ResetPassword')); 
const CoachDashboard = React.lazy(() => import('views/CoachDashboard')); 
const UserDashboard = React.lazy(() => import('views/UserDashboard')); 
const CoachBio = React.lazy(() => import('views/CoachBio')); 
const Test = React.lazy(() => import('views/Test')); 
const VideoUploader = React.lazy(() => import('views/VideoUploader')); 
const Coach = React.lazy(() => import('views/Coach')); 
const Videos = React.lazy(() => import('views/Videos')); 
const Player = React.lazy(() => import('views/Player')); 

var indexRoutes = [
  { path: "/admin", name: "Admin", component: Admin },
  { path: "/coaches", name: "Coaches", component: Coaches },
  { path: "/topics", name: "Topics", component: Topics },
  { path: "/browse", name: "WorkoutPlans", component: WorkoutPlans },
  { path: "/workouts", name: "Workouts", component: Workouts },
  { path: "/signin", name: "SignIn", component: SignIn },
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/coach/approval", name: "CoachApproval", component: CoachApproval },
  { path: "/change-password/", name: "ResetPassword", component: ResetPassword },
  { path: "/forgot-password/", name: "ForgotPassword", component: ForgotPassword },
  { path: "/coach/dashboard/", name: "CoachDashboard", component: CoachDashboard },
  { path: "/user/dashboard/", name: "UserDashboard", component: UserDashboard },
  { path: "/coach/bio/", name: "CoachBio", component: CoachBio },
  { path: "/test/", name: "Test", component: Test },
  { path: "/uploader/", name: "VideoUploader", component: VideoUploader },
  { path: "/videos", name: "Videos", component: Videos },
  { path: "/player", name: "Player", component: Player },
  { path: "/pricing", name: "Pricing", component: Pricing },
  { path: "/:name", name: "Coach", component: Coach },
  { path: "/", name: "Home", component: Home },
];

export default indexRoutes;


