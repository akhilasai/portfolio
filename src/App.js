import { useEffect } from "react";
import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";
import {getAllDataApi} from './redux/actions';
import {useDispatch} from 'react-redux';

export default function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    getAllDataApi(dispatch);
  },[])
  return (
    <Layout>
      <Slidebar />
      <Display />
    </Layout>
  );
}
