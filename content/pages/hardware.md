# My Hardware

I am a big fan of Ubiquiti UniFi hardware. I like how the devices work together, but the software is also a big reason why I use it. With UniFi Network, I can manage my gateway, switch, and access points in one place. I can see which devices are connected, check network traffic, and change settings without opening a separate interface for each device.

I also like UniFi Drive, the software on my UNAS Pro. It gives me a clear overview of my storage, shared folders, and users. My NAS mainly needs to store files and make them available on my network. I do not need it to run containers or virtual machines, because my Proxmox nodes already do that.

Below is the hardware I use for my Proxmox nodes, network, storage, cooling, Wi-Fi, and camera.

## Hardware overview

| Photo | Hardware | Quantity | What I use it for |
| :--- | :--- | :--- | :--- |
| ![UDM SE](/images/hardware/udm-se.webp) | [UDM SE](https://eu.store.ui.com/eu/en/products/udm-se) | 1 device | Internet gateway and network management |
| ![UNAS Pro](/images/hardware/unas-pro.webp) | [UNAS Pro](https://eu.store.ui.com/eu/en/products/unas-pro) | 1 device | Media, backups, and personal files |
| ![Seagate Exos X22 22 TB](/images/hardware/seagate-exos-x22-22tb.png) | [Seagate Exos X22 22 TB](https://tweakers.net/pricewatch/1937676/seagate-exos-x22-sata-standard-model-22tb.html) | 5 drives | Storage in my UNAS Pro; 110 TB raw |
| ![UPS 2U](/images/hardware/ups-2u.webp) | [UPS 2U](https://eu.store.ui.com/eu/en/products/ups-2u-eu) | 1 device | Backup power |
| ![USW Aggregation](/images/hardware/usw-aggregation.webp) | [USW Aggregation](https://eu.store.ui.com/eu/en/products/usw-aggregation) | 1 device | Connecting my Proxmox nodes at 10 Gb/s |
| ![U6 Pro](/images/hardware/u6-pro.webp) | [U6 Pro](https://eu.store.ui.com/eu/en/products/u6-pro) | 2 devices | Wi-Fi at home |
| ![G4 Instant](/images/hardware/g4-instant.webp) | [G4 Instant](https://eu.store.ui.com/eu/en/products/camera-g4-instant) | 1 device | Watching my rack and front door |
| ![Minisforum MS-01](/images/hardware/minisforum-ms-01.png) | [Minisforum MS-01](https://www.minisforum.com/products/minisforum-ms-01) | 4 devices | Proxmox nodes with Intel Core i9-13900H |
| ![SilverStone SST-RCP2B-480](/images/hardware/silverstone-rcp2b-480.jpg) | [SilverStone SST-RCP2B-480](https://www.newegg.com/p/2BA-00BY-00004) | 2 devices | Rack cooling |
| ![Extralink 1U rack shelf](/images/hardware/extralink-shelf-350mm.webp) | [Extralink 1U rack shelf](https://www.amazon.nl/dp/B09X78G288) | 3 shelves | Supporting equipment in my rack |
| ![Crucial 32 GB DDR5 memory](/images/hardware/crucial-32gb-ddr5.jpg) | [Crucial 32 GB DDR5](https://www.amazon.nl/dp/B0BLTDRRLF) | 6 modules | 2 × 32 GB per server in three Proxmox nodes |
| ![Crucial 48 GB DDR5 memory](/images/hardware/crucial-48gb-ddr5.jpg) | [Crucial 48 GB DDR5](https://www.amazon.nl/dp/B0C79K5VGZ) | 2 modules | 2 × 48 GB in one Proxmox node |
| ![Samsung 980 NVMe 1 TB](/images/hardware/samsung-980-1tb.png) | [Samsung 980 NVMe 1 TB](https://www.bol.com/nl/nl/p/samsung-980-m-2-interne-ssd-nvme-1tb/9300000025354350/) | 4 SSDs | One 1 TB SSD in each Proxmox node |

Product photos: Ubiquiti, Minisforum, Seagate, Samsung, SilverStone (via [Newegg](https://www.newegg.com/p/2BA-00BY-00004)), Extralink (via [Batna24](https://www.batna24.com/gb/p/rack-cabinet-accessories/extralink-1u-350mm-black-shelf-19-for-wall-cabinets)), and Crucial (via Amazon). Select a product name to view its product page.

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

### 5 × Seagate Exos X22 22 TB

My UNAS Pro has five Seagate Exos X22 hard drives, each with a capacity of 22 TB. These are 3.5-inch SATA drives. I use them for my media, backups, and personal files.

Together, the five drives give me **110 TB of raw storage**. The space available for files is lower and depends on the storage layout and formatting.

You can find the technical details in the [Seagate Exos X22 datasheet](https://www.seagate.com/content/dam/seagate/en/content-fragments/products/datasheets/exos-x22/exos-x22-DS2080-2209US-en_US.pdf).

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

### Memory in my Proxmox nodes

I use Crucial DDR5 SO-DIMM memory in all four MS-01 systems. The memory is divided like this:

- **Three servers have 64 GB each:** two 32 GB modules per server, so six modules in total.
- **One server has 96 GB:** two 48 GB modules.

That gives me **288 GB of RAM across the four servers**. Each node uses two memory modules.

The two 48 GB modules come from one [96 GB kit, CT2K48G56C46S5](https://www.amazon.nl/dp/B0C79K5VGZ). The memory is rated DDR5-5600.

### SSDs in my Proxmox nodes

Each of my four Minisforum MS-01 servers has one Samsung 980 NVMe SSD with a capacity of 1 TB. That is four SSDs in total, with 1 TB of local storage per server.

The Samsung 980 is an M.2 SSD that uses PCIe 3.0 and NVMe. These drives are installed inside the servers. My UNAS Pro provides separate storage for media, backups, and personal files.

## Rack shelves

### 3 × Extralink 1U rack shelf

I have three black Extralink shelves in my rack. Each shelf fits a standard 19-inch rack, takes up 1U, and is 350 mm deep.

They give me a place to put equipment that does not have its own rack mounts. The shelves are made of steel and have ventilation slots to let air pass through.

## Cooling

### 2 × SilverStone SST-RCP2B-480

I use two SilverStone SST-RCP2B-480 panels to help move air through my racks. Each panel takes up 2U in a standard 19-inch rack and has four 80mm fans.

Each panel has a built-in fan controller with a knob to adjust the speed and a switch to turn the fans on or off. Each fan also has a status LED, so I can check whether it is running. The speed control lets me adjust the airflow and noise level to suit my setup.

---

You can read more about my homelab and see photos of my older setups on the [homelab page](/homelab).
