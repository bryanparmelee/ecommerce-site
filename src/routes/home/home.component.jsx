import Directory from '../../components/directory/directory.component';

import { CATEGORY_DATA } from '../../shopData';

const Home = () => {
    return <Directory categories={CATEGORY_DATA}/>;
}

export default Home;