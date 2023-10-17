import { Routes, Route } from "react-router-dom";
import Main from "./containers/Main";
import Layout from "./containers/common/Layout";
import Notice from "./containers/notice/Notice";
import SampleMain from "./containers/sample/sampleMain";
import SurveyMain from "./containers/survey/surveyMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route element={<Layout />}>
        <Route path="/notice/:id" element={<Notice />} />
        <Route path="/sample" element={<SampleMain />} />
        <Route path="/survey/:id" element={<SurveyMain />} />
      </Route>
    </Routes>
  );
}

export default App;
