import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "./utils/paths";
import { Form } from "./pages/form/Form";
import { BlackJack } from "./pages/blackJack/BlackJack";
import { General } from "./pages/general/general";
import { ArticleAdd } from "./pages/general/articles/Add";
import { Detail } from "./pages/general/articles/Detail";
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

// 開発環境の時だけmswのモックサーバーが動くようにしている
async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path={paths.top} element={<App />} />
          <Route path={paths.form} element={<Form />} />
          <Route path={paths.blackJack} element={<BlackJack />} />
          <Route path={paths.general} element={<General />} />
          <Route path={paths.article.add} element={<ArticleAdd />} />
          <Route path={paths.articles.index + "/:id"} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
