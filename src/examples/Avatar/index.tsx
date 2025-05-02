import { Avatar, Layout } from '@fightclub/libtest';
import avatar1 from '../../assets/avatar1.png';

const AvatarExample = () => {
    return (
        <>
        <Layout>
            <Avatar size={'S'} imageUrl={avatar1} />
        </Layout>
        <Layout>
            <Avatar size={'M'} imageUrl={avatar1} />
        </Layout>
        <Layout>
            <Avatar size={'L'} imageUrl={avatar1} />
        </Layout>
        </>
    )
};

export default AvatarExample;
