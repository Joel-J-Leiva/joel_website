export default {
  slug: 'wazuh-siem-lab',
  intro:
    'A self-hosted security monitoring platform on Linode for centralized log collection, threat detection, file integrity monitoring and CIS benchmark assessment.',
  meta: [
    { label: 'Platform', value: 'Wazuh on Linode' },
    { label: 'Indexer', value: 'OpenSearch' },
    { label: 'Agent transport', value: 'TLS 1.3', measured: true },
    { label: 'CIS checks assessed', value: '395', measured: true },
  ],
  sections: [
    {
      type: 'prose',
      heading: 'Why I built it',
      paragraphs: [
        'To practice security operations outside production systems, I built a cloud-hosted SOC lab with Wazuh on Linode.',
        'It gives host-level visibility: authentication records, system execution logs, network socket states and configuration checks from monitored cloud endpoints, ingested and correlated over TLS.',
        'It is where I write custom detection rules, evaluate CIS hardening benchmarks, simulate malicious activity and practice alert triage.',
      ],
    },
    {
      type: 'pair',
      left: {
        heading: 'Implementation',
        items: [
          { term: 'Cloud provisioning', text: 'A dedicated Linux instance on Linode, with network access rules and firewall groups shielding the management consoles.' },
          { term: 'Wazuh stack', text: 'Installed and integrated the Wazuh Manager, the OpenSearch-powered Wazuh Indexer and the Wazuh Dashboard.' },
          { term: 'Agent onboarding', text: 'Wazuh agents on Linux endpoints with mutual TLS authentication and registration key rotation.' },
          { term: 'Log ingestion', text: 'Syslog, SSH auth logs, systemd journals and command-line execution telemetry centralized into structured JSON indices.' },
          { term: 'FIM policies', text: 'Real-time File Integrity Monitoring tuned on critical paths including `/etc/pam.d`, `/etc/passwd` and binary paths.' },
        ],
      },
      right: {
        heading: 'Detection and defensive controls',
        items: [
          { term: 'Correlation and rule engine', text: 'Automated correlation detects SSH brute-force attempts, unauthorized sudo elevation and privilege escalation patterns.' },
          { term: 'Endpoint risk assessment', text: 'The vulnerability detector cross-references installed package versions against National Vulnerability Database (NVD) CVE feeds.' },
          { term: 'SCA policy verification', text: 'System configurations checked against Center for Internet Security (CIS) standards to find baseline misconfigurations.' },
          { term: 'False-positive filtering', text: 'Rule tuning and noise suppression to prevent alert fatigue and keep indicators high-fidelity.' },
        ],
      },
    },
    {
      type: 'readings',
      heading: 'The CIS benchmark baseline',
      text: 'At onboarding, Wazuh’s Security Configuration Assessment module ran 395 security configuration checks against the operating system.',
      items: [
        { value: 258, label: 'Failing on first scan', tone: 'bad', part: true },
        { value: 137, label: 'Passing on first scan', tone: 'ok', part: true },
        { value: 395, label: 'Checks assessed' },
      ],
      paragraphs: [
        'The 258 failures came from default cloud-image settings, unhardened kernel parameters, permissive system permissions, exposed legacy services and missing audit rules (for example, `auditd` logging rules).',
        'I treated the result as a backlog, not a score. It showed how default server templates add attack surface and set the order for remediating critical service settings and logging pipelines.',
      ],
    },
    {
      type: 'pipeline',
      heading: 'Telemetry and detection flow',
      steps: [
        { name: 'Endpoint agents', text: 'Linux and cloud hosts collect auth.log, syslogs, FIM hashes and SCA benchmarks.', detail: 'Encrypted with TLS 1.3' },
        { name: 'Wazuh Manager', text: 'Decodes raw logs, correlates them against MITRE ATT&CK signatures and scores alert severity.', detail: 'Rule engine' },
        { name: 'Indexer (OpenSearch)', text: 'Indexes security events, SCA reports and vulnerability data for search.', detail: 'Structured indices' },
        { name: 'SOC dashboard', text: 'Analyst views for incident triage, threat timelines, compliance metrics and investigation.', detail: 'Analyst interface' },
      ],
    },
    {
      type: 'lessons',
      heading: 'What I learned',
      items: [
        { title: 'Measure the baseline before enforcing', text: 'The first CIS scans showed that security posture cannot be assumed. Telemetry finds undocumented defaults before aggressive hardening rules disrupt services.' },
        { title: 'Rule tuning prevents alert fatigue', text: 'Default SIEM rules fire on benign automation and scheduled cron jobs. Custom alert levels and targeted exclusions keep the pipeline responsive and high-fidelity.' },
        { title: 'It maps directly to enterprise SecOps', text: 'Running a self-hosted Wazuh instance end to end mirrors enterprise SIEM management: agent communication, index rotation and detection engineering.' },
      ],
    },
  ],
  stack: [
    'Wazuh Manager', 'Wazuh Indexer', 'Wazuh Dashboard', 'Linode cloud compute', 'Linux (Ubuntu/Debian)',
    'Wazuh agents', 'Security Configuration Assessment (SCA)', 'File Integrity Monitoring (FIM)', 'CIS Benchmarks',
    'Syslog / log analysis', 'TLS agent encryption', 'Vulnerability detection engine',
  ],
  skills: [
    'SIEM deployment and architecture', 'Security event correlation', 'Compliance and baseline auditing',
    'System hardening assessment', 'Host-based intrusion detection (HIDS)', 'Cloud security engineering',
    'False-positive analysis', 'Log ingestion and parsing',
  ],
};
