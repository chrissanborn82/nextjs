export default function Post({ id }) {
    return <div> if hi {id}</div>;
}

export async function getStaticPaths() {
    const posts = await Promise.resolve(['/tour/nashville-tn', '/tour/boise-id', '/tour/santa-fe-nm']);
    return { paths: posts, fallback: false };
    // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
    const id = params.id
    return {
        props: {
            id
        }
    }
}