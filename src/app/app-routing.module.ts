import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

  {
    path: 'studentlist',
    loadChildren: () => import('./studentlist/studentlist.module').then( m => m.StudentlistPageModule)
  },
  {
    path: 'dashboard2',
    loadChildren: () => import('./dashboard2/dashboard2.module').then( m => m.Dashboard2PageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
  path: 'viewbooks',
    loadChildren: () => import('./viewbooks/viewbooks.module').then( m => m.ViewbooksPageModule)
  },
  {
  path: 'enroll',
    loadChildren: () => import('./enroll/enroll.module').then( m => m.EnrollPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./datetime/datetime.module').then( m => m.DatetimePageModule)
  },//last na saken
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'viewteacher',
    loadChildren: () => import('./viewteacher/viewteacher.module').then( m => m.ViewteacherPageModule)
  },
  {
    path: 'view-student',
    loadChildren: () => import('./view-student/view-student.module').then( m => m.ViewStudentPageModule)
  },
  {
    path: 'view-class',
    loadChildren: () => import('./view-module/view-module.module').then( m => m.ViewModulePageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'add-course',
    loadChildren: () => import('./add-course/add-course.module').then( m => m.AddCoursePageModule)
  },
  {
    path: 'add-student',
    loadChildren: () => import('./add-student/add-student.module').then( m => m.AddStudentPageModule)
  },
  {
    path: 'add-teacher',
    loadChildren: () => import('./add-teacher/add-teacher.module').then( m => m.AddTeacherPageModule)
  },
  {
    path: 'add-module',
    loadChildren: () => import('./add-module/add-module.module').then( m => m.AddModulePageModule)
  },
  {
    path: 'view-module',
    loadChildren: () => import('./view-module/view-module.module').then( m => m.ViewModulePageModule)
  },
  {
    path: 'edit-student',
    loadChildren: () => import('./edit-student/edit-student.module').then( m => m.EditStudentPageModule)
  },
  {
    path: 'edit-teacher',
    loadChildren: () => import('./edit-teacher/edit-teacher.module').then( m => m.EditTeacherPageModule)
  },
  {
    path: 'edit-course',
    loadChildren: () => import('./edit-course/edit-course.module').then( m => m.EditCoursePageModule)
  },
  {
    path: 'edit-module',
    loadChildren: () => import('./edit-module/edit-module.module').then( m => m.EditModulePageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }