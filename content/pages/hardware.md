# My Hardware

I am a big fan of Ubiquiti UniFi hardware. I like how the devices work together, but the software is also a big reason why I use it. With UniFi Network, I can manage my gateway, switch, and access points in one place. I can see which devices are connected, check network traffic, and change settings without opening a separate interface for each device.

I also like UniFi Drive, the software on my UNAS Pro. It gives me a clear overview of my storage, shared folders, and users. My NAS mainly needs to store files and make them available on my network. I do not need it to run containers or virtual machines, because my Proxmox nodes already do that.

Below is the hardware I use for my Proxmox nodes, network, storage, Wi-Fi, and camera.

## Hardware overview

| Photo | Hardware | Quantity | What I use it for |
| :--- | :--- | :--- | :--- |
| ![UDM SE](/images/hardware/udm-se.webp) | [UDM SE](https://eu.store.ui.com/eu/en/products/udm-se) | 1 device | Internet gateway and network management |
| ![UNAS Pro](/images/hardware/unas-pro.webp) | [UNAS Pro](https://eu.store.ui.com/eu/en/products/unas-pro) | 1 device | Media, backups, and personal files |
| ![UPS 2U](/images/hardware/ups-2u.webp) | [UPS 2U](https://eu.store.ui.com/eu/en/products/ups-2u-eu) | 1 device | Backup power |
| ![USW Aggregation](/images/hardware/usw-aggregation.webp) | [USW Aggregation](https://eu.store.ui.com/eu/en/products/usw-aggregation) | 1 device | Connecting my Proxmox nodes at 10 Gb/s |
| ![U6 Pro](/images/hardware/u6-pro.webp) | [U6 Pro](https://eu.store.ui.com/eu/en/products/u6-pro) | 2 devices | Wi-Fi at home |
| ![G4 Instant](/images/hardware/g4-instant.webp) | [G4 Instant](https://eu.store.ui.com/eu/en/products/camera-g4-instant) | 1 device | Watching my rack and front door |
| ![Minisforum MS-01](/images/hardware/minisforum-ms-01.png) | [Minisforum MS-01](https://www.minisforum.com/products/minisforum-ms-01) | 4 devices | Proxmox nodes with Intel Core i9-13900H |

Product photos: Ubiquiti and Minisforum. Select a product name to view its official page.

## Network

### UDM SE

The UDM SE is the gateway for my home network. It connects my network to the internet and runs UniFi Network, the controller software for my UniFi network devices.

From here, I can manage network settings, check connected devices, and see the status of my switch and access points. I like having this information in one place. It makes it easier to see what is going on when something is not working as expected.

### USW Aggregation

My Proxmox nodes connect to the USW Aggregation with DAC (Direct Attach Copper) cables. Each connection runs at 10 Gb/s. A DAC cable connects directly to the SFP+ ports, so there is no need for separate transceivers and fibre cables for these connections.

The faster connections are useful when moving data between the nodes. A homelab can generate quite a bit of traffic when several virtual machines and containers are running, so I like having more bandwidth available than a standard 1 Gb/s connection.

## Storage

### UNAS Pro

The UNAS Pro is my NAS. I use it to store media, backups, and personal files, and to share files over my network. My Proxmox nodes handle the applications, virtual machines, and containers.

I manage the NAS through UniFi Drive. This is where I can create shared folders, manage users, and decide who can access each folder. I can also check how much storage is used and keep an eye on the drives.

I am happy with this setup. Keeping storage and applications on separate systems suits the way I use my homelab.

## Power

### UPS 2U

I used to have a CyberPower UPS. When the UniFi UPS 2U came out, I bought it straight away because it looks good alongside the rest of my UniFi hardware.

The UPS provides backup power for my homelab during short power cuts. It has a battery that keeps connected equipment running when the mains power goes off.

The running time depends on how much power the connected equipment uses. The battery cannot keep everything running forever, but it helps prevent a short power cut from immediately turning off the equipment.

## Wi-Fi

### 2 × U6 Pro

I use two U6 Pro access points for Wi-Fi at home. Both are managed through UniFi Network, together with the rest of my network equipment.

I can change Wi-Fi settings, see which clients are connected to each access point, and check their connection details from the same interface. Having two access points lets me provide Wi-Fi in more than one part of the house.

## Camera

### G4 Instant

The camera points at my rack so I can keep an eye on it. My rack is in the hallway near the front door, so the camera also lets me see the entrance to my home.

I use a G4 Instant camera with UniFi Protect. Protect is the software for viewing the camera, watching recordings, and changing camera settings.

The camera connects over Wi-Fi, so it does not need a network cable. It still needs power. This makes it easier to place somewhere without a wired network connection.

## Proxmox nodes

### 4 × Minisforum MS-01 (i9-13900H)

I have four Minisforum MS-01 systems, each with an Intel Core i9-13900H processor. I use them as Proxmox nodes to run my virtual machines and containers.

I chose these small systems because I wanted to use less power than with my older servers. They do not take up much space, and they have enough processing power for the services I run at home.

The MS-01 has built-in 10 Gb/s SFP+ ports. My nodes connect to the USW Aggregation with DAC cables, giving each connection a speed of 10 Gb/s. This is useful when moving data between the nodes.

Proxmox lets me manage the virtual machines and containers through a web interface. I can give each service the resources it needs, make snapshots before changes, and try things out in a separate virtual machine.

---

You can read more about my homelab and see photos of my older setups on the [homelab page](/homelab).
