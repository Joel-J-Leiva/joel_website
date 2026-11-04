export default {
  slug: 'dfir-triage-station',
  intro:
    'A portable DFIR station on a Raspberry Pi 5 with its own isolated hotspot for artifact collection, signature scanning and offline LLM case briefs.',
  meta: [
    { label: 'Hardware', value: 'Raspberry Pi 5' },
    { label: 'Hotspot subnet', value: '10.13.37.1/24', measured: true },
    { label: 'Local model', value: 'Qwen3 1.7B on Ollama' },
    { label: 'Launchers', value: 'Windows, macOS, Linux' },
  ],
  sections: [
    {
      type: 'prose',
      heading: 'The problem in the field',
      paragraphs: [
        'Triaging a possibly compromised endpoint on site over an enterprise or public network risks leaking alert telemetry, triggering command-and-control (C2) callbacks or spreading the infection laterally.',
        'So I built an air-gapped field workstation. It runs its own isolated Wi-Fi hotspot, serves triage launchers for Windows, macOS and Linux, runs Velociraptor artifact collection, scans the results with YARA-X and writes case briefs fully offline with a quantized local LLM.',
      ],
    },
    {
      type: 'pair',
      left: {
        heading: 'Engineering',
        items: [
          { text: 'A dedicated hotspot subnet (`10.13.37.1/24`) via NetworkManager avoids address collisions in the field.' },
          { text: 'Cross-platform launcher scripts (PowerShell and Bash) for one-click forensic collection.' },
          { text: 'An ingestion pipeline that extracts, decompresses and verifies SHA-256 hashes of uploaded case ZIPs.' },
          { text: 'YARA-X scans structured JSON evidence and raw file headers for malicious indicators.' },
          { text: 'Ollama runs Qwen3 (1.7B) locally on the Pi 5 to write summary reports without internet access.' },
        ],
      },
      right: {
        heading: 'Containment controls',
        items: [
          { term: 'Network isolation', text: 'No uplink, so malware cannot beacon to C2 servers during triage.' },
          { term: 'Private inference', text: 'Inference stays on the device, so customer or enterprise hostnames never reach external LLM APIs.' },
          { term: 'Forensic integrity', text: 'Hash verification catches partially corrupted or tampered evidence.' },
          { term: 'Faster field triage', text: 'Replaces manual USB transfers, shortening time to insight.' },
        ],
      },
    },
    {
      type: 'gallery',
      heading: 'The hardware',
      images: [
        {
          src: '/projects/dfir-triage-station/DFIR-Triage-Station.webp',
          alt: 'DFIR triage station hardware',
          caption: 'The field workstation hardware.',
          width: 1200,
          height: 1594,
        },
      ],
    },
    {
      type: 'lessons',
      heading: 'What I learned',
      items: [
        { title: 'Pin the hotspot subnet', text: 'Default Linux hotspots can pick subnets that clash with corporate networks. Pinning `10.13.37.1/24` gave predictable routing and static DHCP leases for laptops.' },
        { title: 'Structured evidence beats raw dumps', text: 'Velociraptor’s structured JSON output let YARA-X scan command lines and autorun entries in seconds, avoiding the bottleneck of raw disk dumps.' },
        { title: 'Local LLMs fit incident response', text: 'Small models on edge hardware condense long forensic logs into short incident summaries without giving up operational security.' },
      ],
    },
  ],
  stack: [
    'Raspberry Pi 5', 'Velociraptor', 'YARA-X', 'Ollama (qwen3:1.7b)', 'NetworkManager hotspot',
    'Bash/PowerShell', 'LILYGO T-Display', 'Offline forensic sandbox',
  ],
  skills: [
    'Automated triage ingestion', 'Local LLM summarization', 'YARA rule scanning', 'Linux administration',
    'Field network isolation', 'Incident response automation',
  ],
};
