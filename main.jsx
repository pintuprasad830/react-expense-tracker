import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './components/login/login.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { DataBinding } from './components/data-binding/data-binding.jsx'
import { EventDemo } from './components/event-demo/event-demo.jsx'
import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx'
import { MouseMove } from './components/mouse-move/mouse-move.jsx'
import { KeyDemo } from './components/key-demo/key-demo.jsx'
import { DebounceDemo } from './components/debounce-demo/debounce-demo.jsx'
import { ThrottleDemo } from './components/throttle-demo/throttle-demo.jsx'
import { CarouselDemo } from './components/carousel-demo/carousel-demo.jsx'
import { ClipboardDemo } from './components/clipboard-demo/clipboard.jsx'
import { FormDemo } from './components/form-demo/form-demo.jsx'
import { FormikDemo } from './components/formik-demo/formik-demo.jsx'
import { FormComponent } from './components/form-component/form-component.jsx'
import { FoodDeliveryIndex } from './components/food-delivery/food-delivery-index.jsx'
import { PasswordToggle } from './components/password-toggle-demo/password-toggle.jsx'
import { Hello } from './components/hello-demo/hello.jsx'
import { ShoppingProducts } from './components/shopping/shopping-products.jsx'
import { ShoppingIndex } from './components/shopping/shopping-index.jsx'
import { DigitalClock } from './components/digital-clock/digital-clock.jsx'
import { CookiesProvider } from 'react-cookie'
import { RouterProvider, Routes } from 'react-router-dom'
import { router } from './routes/routes.jsx'  
import { BMICalculator } from './components/bmi-calculator/bmi-calculator.jsx'
import { WordCounter } from './components/word-counter/word-counter.jsx'
import { DiceRoller } from './components/dice-roller/dice-roller.jsx'
import { CycleDemo } from './components/cycle-demo/cycle-demo.jsx'
 import { ReducerDemo } from './components/reducer-demo/reducer-demo.jsx'
import { PasswordStrength } from './components/password-strength/password-strength.jsx'
import { NotesApp } from './components/notes-app/notes-app.jsx'
import { ExpenseTracker } from './components/expense-tracker/expense-tracker.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseTracker />
   </StrictMode>,
)
  
