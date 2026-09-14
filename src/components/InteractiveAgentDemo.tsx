import React, { useState } from 'react';
import { DEMO_INDUSTRIES, getWhatsAppUrl } from '../data/content';
import { LogoEmblem } from './Logo';
import {
  Send,
  Sparkles,
  MessageCircle,
  Minimize2,
  RefreshCw,
  ExternalLink,
  Bot,
  ChevronRight
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
}

export const InteractiveAgentDemo: React.FC = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('restaurant');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(true);
  const [inputVal, setInputVal] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const activeIndustry =
    DEMO_INDUSTRIES.find((ind) => ind.id === selectedIndustryId) || DEMO_INDUSTRIES[0];

  // Initial messages state tailored to active industry
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'agent',
      text: activeIndustry.chatPreset.greeting,
      timestamp: 'Just now'
    },
    {
      id: '2',
      sender: 'user',
      text: 'What services do you offer?',
      timestamp: 'Just now'
    },
    {
      id: '3',
      sender: 'agent',
      text: activeIndustry.chatPreset.qaPairs[0]?.answer || 'We offer full-service solutions.',
      timestamp: 'Just now'
    }
  ]);

  // When industry changes, reset conversation
  const handleSelectIndustry = (id: string) => {
    setSelectedIndustryId(id);
    const ind = DEMO_INDUSTRIES.find((item) => item.id === id) || DEMO_INDUSTRIES[0];
    setMessages([
      {
        id: '1',
        sender: 'agent',
        text: ind.chatPreset.greeting,
        timestamp: 'Just now'
      },
      {
        id: '2',
        sender: 'user',
        text: 'What services do you offer?',
        timestamp: 'Just now'
      },
      {
        id: '3',
        sender: 'agent',
        text: ind.chatPreset.qaPairs[0]?.answer || 'We provide complete business services.',
        timestamp: 'Just now'
      }
    ]);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate Agent response based on question matching
    setTimeout(() => {
      const lower = text.toLowerCase();
      let answerText =
        "Thank you for asking! I can provide full details or connect you directly with our manager on WhatsApp right now.";

      const matchedPair = activeIndustry.chatPreset.qaPairs.find((qa) =>
        lower.includes(qa.question.toLowerCase().split(' ')[0]) ||
        lower.includes('order') ||
        lower.includes('service') ||
        lower.includes('hours') ||
        lower.includes('price') ||
        lower.includes('book')
      );

      if (matchedPair) {
        answerText = matchedPair.answer;
      } else if (lower.includes('order')) {
        answerText =
          "We can process your order immediately! What items would you like to request?";
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('speak')) {
        answerText =
          "You can reach our team directly via WhatsApp at +252 687083529 for instant service!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'agent',
          text: answerText,
          timestamp: 'Just now'
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <section
      id="agent-demo"
      className="py-20 lg:py-28 relative bg-[#060608] border-t border-zinc-800/80 overflow-hidden"
    >
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101015] border border-zinc-800 text-[#d99b73] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Visual Demonstration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            See How Your Agent{' '}
            <span className="text-[#d99b73]">Works Inside Your Website</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A realistic customer-support assistant embedded directly into your website. It greets
            browsing visitors, answers common questions in seconds, and captures ready-to-buy inquiries 24/7.
          </p>
        </div>

        {/* Industry Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Choose Industry Example:</span>
          {DEMO_INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => handleSelectIndustry(ind.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                selectedIndustryId === ind.id
                  ? 'bg-gradient-to-r from-[#d99b73] to-[#c2855f] text-black border-[#d99b73] shadow-md shadow-black'
                  : 'bg-[#0f0f14] text-slate-300 hover:text-white border-zinc-800 hover:bg-[#15151c]'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Realistic Browser Frame with Embedded Website & Chat Widget in Carbon Black */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#0a0a0e] border border-zinc-800 shadow-2xl shadow-black overflow-hidden">
          {/* Browser Window Header */}
          <div className="bg-[#121218] px-4 py-3 border-b border-zinc-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs text-slate-400 ml-2 font-medium hidden sm:inline">
                Builder Agent Client Preview
              </span>
            </div>

            {/* URL Search bar */}
            <div className="flex-1 max-w-md mx-auto flex items-center justify-center px-4 py-1 rounded-lg bg-[#060609] border border-zinc-800 text-xs text-slate-400 font-mono truncate">
              <span className="text-emerald-400 mr-2 text-[10px]">&#128274; https://</span>
              <span className="text-slate-200 truncate">
                www.{activeIndustry.businessName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={() => handleSelectIndustry(selectedIndustryId)}
                title="Reset preview conversation"
                className="p-1 hover:text-white transition-colors"
                aria-label="Reset demo"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Browser Screen Content (The Mockup Website) */}
          <div className="relative min-h-[520px] sm:min-h-[580px] bg-gradient-to-b from-[#0d0d12] via-[#09090c] to-[#050507] p-4 sm:p-8 overflow-hidden">
            {/* The Mock Business Website Interior */}
            <div className="max-w-3xl">
              {/* Mini Business Nav */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#d99b73] flex items-center justify-center font-bold text-black text-sm">
                    {activeIndustry.businessName[0]}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block leading-tight">
                      {activeIndustry.businessName}
                    </span>
                    <span className="text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                      {activeIndustry.category}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-300">
                  <span className="hover:text-white cursor-pointer">Menu &amp; Services</span>
                  <span className="hover:text-white cursor-pointer">About Us</span>
                  <span className="hover:text-white cursor-pointer">Location</span>
                  <span className="px-3 py-1 rounded-md bg-[#d99b73] text-black font-bold">
                    Contact Us
                  </span>
                </div>
              </div>

              {/* Mini Hero Banner of the Business */}
              <div className="rounded-xl bg-[#111117] p-6 border border-zinc-800 mb-6 max-w-xl">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#181822] text-[10px] font-semibold text-cyan-400 uppercase tracking-wider mb-2 border border-zinc-800">
                  Welcome
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {activeIndustry.heroHeadline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {activeIndustry.heroSubheadline}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setIsChatOpen(true);
                      handleSendMessage('What services do you offer?');
                    }}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#d99b73] to-[#c2855f] text-black text-xs font-bold transition-colors flex items-center gap-1.5 shadow"
                  >
                    <span>Ask Our Assistant</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-slate-400">Available 24/7 on this site</span>
                </div>
              </div>

              {/* Sample Business Offerings Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
                <div className="p-3.5 rounded-xl bg-[#0e0e13] border border-zinc-800">
                  <span className="text-[11px] font-bold text-white block">Fast Response</span>
                  <span className="text-[10px] text-slate-400">Under 5 seconds</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0e0e13] border border-zinc-800">
                  <span className="text-[11px] font-bold text-white block">WhatsApp Ready</span>
                  <span className="text-[10px] text-cyan-400">Direct order sync</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0e0e13] border border-zinc-800 col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-bold text-white block">Always Open</span>
                  <span className="text-[10px] text-slate-400">Never miss a lead</span>
                </div>
              </div>
            </div>

            {/* FLOATING AGENT CHAT WIDGET (Lower Right) */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex flex-col items-end">
              {/* The Opened Chat Window in Carbon Black */}
              {isChatOpen && (
                <div className="w-[300px] sm:w-[350px] h-[400px] sm:h-[450px] rounded-2xl bg-[#0e0e14] border border-zinc-700/80 shadow-2xl flex flex-col overflow-hidden mb-3 animate-in fade-in zoom-in-95 duration-200">
                  {/* Chat Window Header */}
                  <div className="bg-[#14141c] p-3.5 border-b border-zinc-800 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-8 h-8 rounded-full bg-[#1e1e28] border border-zinc-700 flex items-center justify-center font-bold text-xs shadow-md p-0.5">
                        <LogoEmblem size="sm" className="w-6 h-6" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0e0e14]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">
                            {activeIndustry.businessName}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400">
                          <span>Builder Agent</span>
                          <span>&bull;</span>
                          <span className="text-emerald-400 font-semibold">Online</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setIsChatOpen(false)}
                        className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-zinc-800 transition-colors"
                        title="Minimize"
                      >
                        <Minimize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Chat Messages Scrollable Stream */}
                  <div className="flex-1 p-3.5 space-y-3 overflow-y-auto bg-[#09090d] text-xs">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.sender === 'agent' && (
                          <div className="w-6 h-6 rounded-full bg-[#181822] border border-zinc-700 flex items-center justify-center p-0.5 mr-2 shrink-0 self-end overflow-hidden">
                            <LogoEmblem size="sm" className="w-5 h-5" />
                          </div>
                        )}
                        <div
                          className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                            msg.sender === 'user'
                              ? 'bg-gradient-to-r from-[#d99b73] to-[#c2855f] text-black font-semibold rounded-br-xs shadow-md'
                              : 'bg-[#15151e] text-slate-200 border border-zinc-800 rounded-bl-xs'
                          }`}
                        >
                          <p>{msg.text}</p>
                          <span className="block text-[9px] mt-1 opacity-60 text-right">
                            {msg.timestamp}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-6 h-6 rounded-full bg-[#181822] border border-zinc-700 flex items-center justify-center p-0.5 shrink-0 overflow-hidden">
                          <LogoEmblem size="sm" className="w-5 h-5" />
                        </div>
                        <div className="bg-[#15151e] border border-zinc-800 rounded-2xl px-3 py-2 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"
                            style={{ animationDelay: '150ms' }}
                          />
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"
                            style={{ animationDelay: '300ms' }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Suggestion Chips */}
                  <div className="px-3 py-2 bg-[#0e0e14] border-t border-zinc-800 overflow-x-auto no-scrollbar flex items-center gap-1.5">
                    {activeIndustry.chatPreset.suggestions.slice(0, 3).map((sugg, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(sugg)}
                        className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#181822] hover:bg-zinc-800 text-[10px] text-[#d99b73] hover:text-white border border-zinc-750 transition-colors"
                      >
                        {sugg}
                      </button>
                    ))}
                  </div>

                  {/* Message Input Box */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage(inputVal);
                    }}
                    className="p-2.5 bg-[#121218] border-t border-zinc-800 flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="Type a question or order..."
                      className="flex-1 bg-[#07070a] text-xs text-white placeholder-slate-500 px-3 py-2 rounded-xl border border-zinc-800 focus:outline-none focus:border-cyan-500"
                    />
                    <button
                      type="submit"
                      disabled={!inputVal.trim()}
                      className="p-2 rounded-xl bg-gradient-to-r from-[#d99b73] to-[#c2855f] text-black disabled:opacity-40 transition-colors font-bold"
                      aria-label="Send message"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* The Floating Bubble Button Trigger */}
              <button
                id="floating-demo-widget-btn"
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-[#16161f] hover:bg-[#20202c] text-white font-semibold text-xs sm:text-sm shadow-2xl shadow-black transition-all duration-200 active:scale-95 border border-zinc-700"
                aria-label="Open support agent"
              >
                <div className="relative">
                  <Bot className="w-5 h-5 text-cyan-400" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#16161f] animate-pulse" />
                </div>
                <span>{isChatOpen ? 'Close Assistant' : 'Ask Business Assistant'}</span>
              </button>
            </div>
          </div>

          {/* Demonstration Footer Info Bar */}
          <div className="bg-[#101015] px-5 py-3 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>
                <strong>What your business gets:</strong> Clean branded chat widget on your website
                that automatically routes inquiries to WhatsApp.
              </span>
            </div>

            <a
              href={getWhatsAppUrl(
                `Hello Builder Agent, I tested the ${activeIndustry.name} agent demo and want to discuss an agent for my business.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#d99b73] hover:text-white font-bold underline underline-offset-4"
            >
              <span>Build this for my business</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
