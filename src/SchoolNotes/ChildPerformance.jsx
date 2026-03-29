export default function ChildPerformance({user}) { 
    console.log('Child Rendered')
    return (
        <>
        <p>child component performance {user.username}</p>
        </>
    )
}