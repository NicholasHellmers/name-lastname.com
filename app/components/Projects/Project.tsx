import Image from "next/image"

type project = {
    name:         string,
    desc:         string,
    project_url:  string,
    img_url:      string
}

export default function Project(props: project) {
  return (
    <a className="m-auto h-[100%] border rounded-lg overflow-hidden" href={props.project_url} target="_blank">
        <div className="leading-loose max-w-[25rem]">
                <Image className="object-cover h-52 w-[100%]" fill={false} width={1000} height={1000} src={props.img_url} alt={props.name}/>
                <div className="py-3 px-5">
                  <h1>{props.name}</h1>
                  <p className="text-sm font-light text-gray-300">{props.desc}</p>

                </div>
        </div>
    </a>
  )
}
