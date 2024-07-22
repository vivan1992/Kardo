import TabBar from '../../ui/tabBar';
import NavBar from '../../ui/navBar';

function Root() {
  return (
    <>
      <NavBar isBack isMessage isNotice isSettings />
      <TabBar />
    </>
  );
}

export default Root;
