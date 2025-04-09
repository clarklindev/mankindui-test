import { Button, Icon, Label, Layout } from '@fightclub/libtest';;
import { ShoppingCartIcon, ThumbsUpIcon } from '@fightclub/libtest/icons';

const ButtonExample = () => {
    return (
        <>
            <Layout>
                <Button intent="primary">primary</Button>
            </Layout>
            <Layout>
                <Button intent="primary-nohover">primary no-hover</Button>
            </Layout>
            <Layout>
                <Button intent="secondary">secondary</Button>
            </Layout>
            <Layout>
                <Button intent="secondary-nohover">secondary no-hover</Button>
            </Layout>

            <Layout>
                <Button intent="contained">Contained</Button>
            </Layout>

            <Layout>
                <Button intent="contained-nohover">Contained no-hover</Button>
            </Layout>

            <Layout>
                <Button intent="outlined">Outlined</Button>
            </Layout>
            <Layout>
                <Button intent="outlined-nohover">Outlined no-hover</Button>
            </Layout>
            <Layout>
                <Button intent="icon">
                    <Icon size="L">
                        <ShoppingCartIcon />
                    </Icon>
                </Button>
            </Layout>
            <Layout>
                <Button intent="text">Text</Button>
            </Layout>
            <Layout>
                <Button intent="contained" className="bg-red-500 hover:bg-red-600 text-white">
                    <Label gap="10px" label="right" labelDirection="right">
                        <Icon size="L">
                            <ThumbsUpIcon stroke="blue" />
                        </Icon>
                    </Label>
                </Button>
            </Layout>
        </>
    );
};

export default ButtonExample;
