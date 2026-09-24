"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

type HistoryItem = {
  id: string;
  type: "input" | "output";
  content: React.ReactNode;
};

export default function TerminalSimulator() {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: "init-1",
      type: "output",
      content: (
        <div className="text-text-secondary">
          Welcome to AmaaNOS v1.0.0
          <br />
          Type <span className="text-accent">&apos;help&apos;</span> to see available commands.
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const newHistory: HistoryItem[] = [...history, { id: Math.random().toString(36).substring(7), type: "input", content: cmd }];

    const lowerCmd = trimmedCmd.toLowerCase();
    const args = lowerCmd.split(" ");
    const baseCmd = args[0];

    let output: React.ReactNode = "";

    switch (baseCmd) {
      case "help":
        output = (
          <div className="space-y-1 text-text-secondary">
            <div><span className="text-accent">about</span>    - Learn about Amaan</div>
            <div><span className="text-accent">projects</span> - View featured work</div>
            <div><span className="text-accent">contact</span>  - Get in touch</div>
            <div><span className="text-accent">ping</span>     - Send ICMP ECHO_REQUEST to network hosts</div>
            <div><span className="text-accent">dig</span>      - DNS lookup utility</div>
            <div><span className="text-accent">ssh</span>      - OpenSSH SSH client (remote login program)</div>
            <div><span className="text-accent">curl</span>     - Transfer a URL</div>
            <div><span className="text-accent">clear</span>    - Clear terminal</div>
            <div><span className="text-accent">exit</span>     - Terminate current session</div>
          </div>
        );
        break;
      case "about":
        output = (
          <div className="text-text-secondary">
            Hello, I&apos;m Amaan. Backend engineer, systems builder.
            <br />
            I build resilient backend architectures and full-stack products.
            <br />
            Founder of ZaykaTap. Focused on shipping software that works flawlessly in the real world.
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-1 text-text-secondary">
            <div><span className="text-accent">ZaykaTap</span> - Web ordering platform & mobile app</div>
            <div><span className="text-accent">Ultron</span>   - Offline voice-activated assistant on Raspberry Pi</div>
            <div><span className="text-accent">Imgx</span>     - Smarter image loading for the web</div>
            <div><span className="text-accent">MPM</span>      - Minimal package manager</div>
            <div><span className="text-accent">Molt</span>     - International trade business website</div>
          </div>
        );
        break;
      case "contact":
        output = (
          <div className="space-y-1 text-text-secondary">
            <div>Email: <a href="mailto:contact.amaanwarsi@gmail.com" className="text-accent hover:underline">contact.amaanwarsi@gmail.com</a></div>
            <div>GitHub: <a href="https://github.com/amaanwarsi" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">github.com/amaanwarsi</a></div>
            <div>LinkedIn: <a href="https://linkedin.com/in/amaanwarsi" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">linkedin.com/in/amaanwarsi</a></div>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      // Easter eggs and network commands
      case "ping":
        if (!args[1]) {
           output = <div className="text-red-400">ping: missing host operand</div>;
        } else {
           output = (
             <div className="text-text-secondary animate-pulse text-xs md:text-sm">
               PING {args[1]} (192.168.1.1): 56 data bytes<br/>
               64 bytes from 192.168.1.1: icmp_seq=0 ttl=116 time=14.2 ms<br/>
               64 bytes from 192.168.1.1: icmp_seq=1 ttl=116 time=15.1 ms<br/>
               64 bytes from 192.168.1.1: icmp_seq=2 ttl=116 time=13.8 ms<br/>
               --- {args[1]} ping statistics ---<br/>
               3 packets transmitted, 3 packets received, 0.0% packet loss
             </div>
           );
        }
        break;
      case "dns":
      case "dig":
        if (!args[1]) {
           output = <div className="text-red-400">dig: no domain provided</div>;
        } else {
           output = (
             <div className="text-text-secondary text-xs md:text-sm">
               ; &lt;&lt;&gt;&gt; DiG 9.10.6 &lt;&lt;&gt;&gt; {args[1]}<br/>
               ;; global options: +cmd<br/>
               ;; Got answer:<br/>
               ;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 1337<br/>
               ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1<br/>
               <br/>
               ;; ANSWER SECTION:<br/>
               {args[1]}.		300	IN	A	203.0.113.42<br/>
               <br/>
               ;; Query time: 24 msec<br/>
               ;; SERVER: 8.8.8.8#53(8.8.8.8)
             </div>
           );
        }
        break;
      case "ssh":
        if (!args[1]) {
           output = <div className="text-red-400">usage: ssh user@hostname</div>;
        } else if (args[1] === "root@zaykatap" || args[1].includes("amaan")) {
           output = <div className="text-success animate-pulse">Establishing secure connection... Connection refused (Security Policy Enforced).</div>;
        } else {
           output = <div className="text-red-400">ssh: connect to host {args[1].split('@').pop()} port 22: Connection timed out</div>;
        }
        break;
      case "curl":
        if (!args[1]) {
            output = <div className="text-red-400">curl: try &apos;curl --help&apos; or &apos;curl --manual&apos; for more information</div>;
        } else if (args[1].includes("amaanwarsi")) {
            output = <div className="text-success">&lt;html&gt;&lt;body&gt;{"{"}&quot;status&quot;: &quot;hire me&quot;{"}"}&lt;/body&gt;&lt;/html&gt;</div>;
        } else {
            output = <div className="text-text-secondary">curl: (6) Could not resolve host: {args[1]}</div>;
        }
        break;
      case "exit":
        setIsActive(false);
        output = <div className="text-text-secondary">Session terminated.</div>;
        break;
      case "sudo":
        output = <div className="text-red-400">Permission denied. Nice try! This incident will be reported.</div>;
        break;
      case "whoami":
        output = <div className="text-text-secondary">visitor</div>;
        break;
      case "rm":
        if (args[1] === "-rf" && (args[2] === "/" || args[2] === "/*")) {
          output = <div className="text-red-400">lol no. I need this portfolio to get hired.</div>;
        } else {
          output = <div className="text-text-secondary">rm: missing operand</div>;
        }
        break;
      case "ls":
        output = <div className="text-text-secondary flex gap-4"><span className="text-accent">about.txt</span> <span className="text-accent">projects.json</span> <span className="text-accent">contact.sh</span> <span className="text-success">zaykatap/</span></div>;
        break;
      case "pwd":
        output = <div className="text-text-secondary">/home/visitor</div>;
        break;
      case "date":
        output = <div className="text-text-secondary">{new Date().toString()}</div>;
        break;
      case "echo":
        output = <div className="text-text-secondary">{args.slice(1).join(" ")}</div>;
        break;
      case "cat":
        if (args[1] === "about.txt") {
            output = <div className="text-text-secondary">Hello, I&apos;m Amaan. Backend engineer, systems builder.</div>;
        } else if (args[1] === "projects.json") {
            output = <div className="text-text-secondary">{`{ "featured": "ZaykaTap", "others": ["Ultron", "Imgx", "MPM", "Molt"] }`}</div>;
        } else if (args[1] === "contact.sh") {
            output = <div className="text-text-secondary">{`echo "mailto:contact.amaanwarsi@gmail.com"`}</div>;
        } else {
            output = <div className="text-red-400">cat: {args[1] || 'missing operand'}: No such file or directory</div>;
        }
        break;
      case "cd":
        output = <div className="text-text-secondary">cd: {args[1] || '~'}: No such file or directory (it&apos;s a fake shell!)</div>;
        break;
      default:
        output = <div className="text-red-400">Command not found: {baseCmd}. Type &apos;help&apos; for a list of commands.</div>;
    }

    setHistory([...newHistory, { id: Math.random().toString(36).substring(7), type: "output", content: output }]);
    setInput("");
  };

  return (
    <div 
      className="bg-[#12100e] border border-border rounded-xl p-4 md:p-6 flex flex-col font-mono text-sm md:text-base h-[400px] overflow-hidden shadow-2xl relative group cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#1c1a17] to-transparent flex items-center px-4 border-b border-border/30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs text-text-muted font-sans flex items-center gap-2">
          <TerminalIcon className="w-3 h-3" />
          amaanos@visitor ~
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto space-y-3 pb-2 mt-8 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
      >
        {history.map((item) => (
          <div key={item.id} className="flex gap-2">
            {item.type === "input" && <span className="text-success select-none shrink-0">visitor@amaanos:~$ </span>}
            <div className="flex-1 break-words">{item.content}</div>
          </div>
        ))}
        
        {isActive ? (
          <div className="flex gap-2 items-center">
            <span className="text-success select-none shrink-0">visitor@amaanos:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleCommand(input);
                }
              }}
              className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder:text-text-muted/50 focus:ring-0 min-w-0"
              spellCheck={false}
              autoComplete="off"
              autoFocus
            />
          </div>
        ) : (
          <div className="pt-4 pb-2">
            <button 
              onClick={() => {
                setIsActive(true);
                setHistory(prev => [...prev, { id: Math.random().toString(36).substring(7), type: "output", content: <div className="text-success pt-4">Terminal restarted.</div> }]);
                setTimeout(() => inputRef.current?.focus(), 10);
              }}
              className="bg-bg-raised/50 border border-border text-text-primary px-4 py-2 rounded font-mono hover:border-text-muted transition-colors text-sm hover:bg-bg-raised"
            >
              Re-enable Terminal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
