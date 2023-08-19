type project = {
    name:         string,
    desc:         string,
    project_url:  string,
    img_url:      string
}

export default function Project(props: project) {
  return (
    <a className="w-96 m-auto border rounded-lg leading-loose overflow-hidden" href={props.project_url} target="_blank">
        <div className="">
                <img src={props.img_url} alt={props.name}/>
                <h1>{props.name}</h1>
                <p>{props.desc}</p>
        </div>
    </a>
  )
}
