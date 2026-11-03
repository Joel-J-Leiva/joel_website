export default {
  slug: 'physical-server-nvr',
  intro:
    'Assembly, power distribution, structured cabling and network integration of a server rack with switching, storage and a 5-camera PoE IP surveillance system.',
  meta: [
    { label: 'Environment', value: 'Physical lab enclosure' },
    { label: 'Endpoints', value: '5 devices + 5 PoE cameras', measured: true },
    { label: 'Focus', value: 'Infrastructure and cable engineering' },
  ],
  sections: [
    {
      type: 'note',
      heading: 'Scope',
      text: 'This is physical infrastructure engineering, power organization and device-level networking. The cameras give facility visibility and live traffic for packet analysis, but physical surveillance alone is not presented as an enterprise cybersecurity monitoring or SIEM solution.',
    },
    {
      type: 'prose',
      heading: 'Infrastructure first',
      paragraphs: [
        'Security operations depend on sound physical and network infrastructure. Even good SIEM and defensive controls are exposed if hardware is wired haphazardly, left uncooled or hangs on a single point of power failure.',
        'I deployed an organized rack enclosure for 5 core devices: mounted and secured the switching, distributed AC power through a rackmount PDU, terminated structured Cat6 cabling, and set up a dedicated 5-camera PoE IP surveillance network connected through an unmanaged switch to a Network Video Recorder (NVR).',
      ],
    },
    {
      type: 'pair',
      left: {
        heading: 'Deployment tasks',
        ordered: true,
        items: [
          { term: 'Rack assembly and sizing', text: 'Assembled the enclosure and planned U-height allocation for airflow, heat dissipation and easy maintenance.' },
          { term: 'Power distribution (PDU)', text: 'Mounted and balanced power leads on a PDU, replacing loose power strips and reducing fire and disconnect risk.' },
          { term: 'PoE IP camera network', text: '5 IP cameras powered entirely over Ethernet (802.3af/at), so no high-voltage AC drops near the camera mounts.' },
          { term: 'Cabling and termination', text: 'Terminated, labeled and routed Cat6 patch runs through horizontal management bars.' },
          { term: 'Network and storage integration', text: 'Camera feeds connected to the NVR for video ingestion, local storage allocation and streaming validation.' },
        ],
      },
      right: {
        heading: 'Operational and defensive insights',
        items: [
          { term: 'Physical security', text: 'Sets a baseline of environmental security for servers, network hardware and access perimeters.' },
          { term: 'Traffic stream inspection', text: 'Continuous multicast and RTSP video traffic is a live testbed for packet inspection and bandwidth analysis.' },
          { term: 'Power and thermal resilience', text: 'Rack spacing and PDU distribution prevent hardware throttling and unplanned downtime from electrical surges.' },
          { term: 'Segmentation awareness', text: 'Shows why IoT and video devices belong on separate subnets from administrative ones, limiting attack surface.' },
        ],
      },
    },
    {
      type: 'gallery',
      heading: 'The hardware',
      images: [
        {
          src: '/projects/physical-server-nvr/Server-1.jpg',
          alt: 'Physical server rack and NVR infrastructure',
          caption: 'Rack assembly with a central PDU and multi-device mounting.',
          width: 4080,
          height: 3060,
        },
        {
          src: '/projects/physical-server-nvr/Server-2.jpg',
          alt: 'PoE camera network equipment',
          caption: 'PoE IP cameras and cable termination for structured video feed routing.',
          width: 4080,
          height: 3072,
        },
        {
          src: '/projects/physical-server-nvr/Server-VMS.jpg',
          alt: 'NVR and switching infrastructure',
          caption: 'The Network Video Recorder (NVR) integrated with the switching.',
          width: 3072,
          height: 4080,
        },
      ],
    },
    {
      type: 'lessons',
      heading: 'What I learned',
      items: [
        { title: 'PoE efficiency', text: 'PoE simplifies IoT and surveillance deployments by carrying data and DC power on a single Cat6 run, which also centralizes backup battery support.' },
        { title: 'Thermal dynamics', text: 'Enclosed racks build heat quickly from switches, transformers and continuous NVR disk writes. Vertical spacing and ventilation prevent component failure.' },
        { title: 'Cable discipline', text: 'Labeling and strain relief prevent accidental disconnections during maintenance and speed up physical troubleshooting in enterprise data centers.' },
      ],
    },
  ],
  stack: [
    'Physical server rack enclosure', 'Rackmount PDU (power distribution unit)', 'TP-Link gigabit switching',
    'PoE (Power over Ethernet) infrastructure', 'Network Video Recorder (NVR)', '5x PoE high-definition IP cameras',
    'Cat6 Ethernet termination and patching', 'Network traffic analysis (Wireshark)',
  ],
  skills: [
    'Physical infrastructure engineering', 'Rack mounting and equipment positioning', 'Structured cable management',
    'PoE power budgeting', 'Network device isolation', 'Hardware diagnostics and thermal management',
  ],
};
