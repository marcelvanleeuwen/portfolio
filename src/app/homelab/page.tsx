import Image from "next/image";

export default function HomelabPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold pb-10">My Homelab Through the Years</h1>

      <figure className="pb-10">
        <Image
            src="/images/homelab/homelab_version_2026.jpg"
            alt="current homelab"
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl"
        />
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            My current homelab
        </figcaption>
        </figure>
      
      <div className="space-y-6 leading-relaxed text-muted-foreground">
        <p>
            Over the years, I have built several versions of my home production network. It all started with an old desktop PC tucked away in the utility cupboard, and gradually grew as I added more hardware, services, and devices. As electricity prices in the Netherlands increased, I decided it was time to redesign my homelab with a strong focus on energy efficiency.
        </p>

        <p>
            Today, my servers run on Minisforum MS-01 systems. Instead of traditional Xeon-based servers, the MS-01 uses a modern Intel laptop processor. These CPUs offer an excellent balance between performance and power consumption, making them ideal for a homelab that runs 24/7. With plenty of CPU cores, support for large amounts of memory, and fast NVMe storage, they provide everything I need while using far less electricity than my previous hardware.
            The MS-01 systems run Proxmox VE, a powerful open-source Type 1 hypervisor. It allows me to run all of my services in both virtual machines and lightweight LXC containers, depending on the workload. Features such as snapshots, backups, clustering, software-defined networking, and an intuitive web interface make Proxmox a reliable and flexible platform for my homelab.
        </p>

        <p>
            For storage, I use a UniFi UNAS Pro, and I am very happy with it. Its ARM-based platform is efficient, quiet, and reliable. My NAS has one job: storing data. I do not need virtualization, containers, or the many extra applications that come with some NAS systems, such as Synology. The UNAS Pro focuses on storage, and that is exactly what I was looking for. It works perfectly alongside my Proxmox servers, providing reliable storage while Proxmox handles the virtualization.
        </p>

        <p>
            The rest of my network is built around the Ubiquiti UniFi ecosystem, which I enjoy using because it combines simple management with reliable hardware.
        </p>

        <p>
            Compared to my previous setup, my current homelab uses much less power while still delivering all the performance I need. For me, it proves that modern, energy-efficient hardware is more than capable of powering a reliable homelab.
        </p>
       </div> 
    


        <div className="grid grid-cols-2 gap-4">
        {[
        { src: "/images/homelab/homelab_version_2024.jpg", alt: "homelab 2024" },
        { src: "/images/homelab/homelab_version_2009.jpg", alt: "homelab 2009" },
        { src: "/images/homelab/homelab_version_2011.jpg", alt: "homelab 2011" },
        { src: "/images/homelab/homelab_version_2017.jpg", alt: "homelab 2017" },
        ].map((foto) => (
          <figure key={foto.src} className="space-y-2">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 672px) 50vw, 336px"
                className="object-cover"
              />
            </div>

            <figcaption className="text-center text-sm text-muted-foreground">
              {foto.alt}
            </figcaption>
          </figure>
        ))}
    </div>
</main>
  );
}