export default function NameTag({name = "Nobody", src = "https://i.pravatar.cc/300"}) {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '16px'
    }}>
        <img src={src} alt={name} width={64} height={64} style={{
            borderRadius: '100%'
        }}/>
        <h2>{name}</h2>
    </div>
}