import { motion } from 'framer-motion';

export const TableRowSkeleton = () => (
  <div className="border-b border-white/5 p-4">
    <div className="flex items-center space-x-4">
      <div className="w-2/5">
        <div className="h-4 bg-white/5 rounded animate-pulse" />
      </div>
      <div className="w-1/5">
        <div className="h-4 bg-white/5 rounded animate-pulse" />
      </div>
      <div className="w-1/5">
        <div className="h-4 bg-white/5 rounded animate-pulse" />
      </div>
      <div className="w-1/5">
        <div className="h-4 bg-white/5 rounded animate-pulse" />
      </div>
    </div>
  </div>
);

export const CardSkeleton = () => (
  <div className="glass-card p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-white/5 rounded-lg animate-pulse" />
      <div className="space-y-2">
        <div className="w-20 h-6 bg-white/5 rounded animate-pulse" />
        <div className="w-16 h-4 bg-white/5 rounded animate-pulse" />
      </div>
    </div>
    <div className="h-4 bg-white/5 rounded animate-pulse" />
  </div>
);

export const ChartSkeleton = () => (
  <div className="glass-card p-6">
    <div className="h-6 w-1/4 bg-white/5 rounded animate-pulse mb-4" />
    <div className="h-64 bg-white/5 rounded animate-pulse" />
  </div>
);

export const SidebarSkeleton = () => (
  <div className="space-y-4 p-6">
    <div className="flex items-center space-x-2 mb-8">
      <div className="w-32 h-8 bg-white/5 rounded animate-pulse" />
      <div className="w-16 h-6 bg-white/5 rounded-full animate-pulse" />
    </div>
    {[...Array(6)].map((_, index) => (
      <div key={index} className="flex items-center space-x-3 px-6 py-3">
        <div className="w-5 h-5 bg-white/5 rounded animate-pulse" />
        <div className="w-24 h-4 bg-white/5 rounded animate-pulse" />
      </div>
    ))}
  </div>
);

export const HeaderSkeleton = () => (
  <div className="flex items-center justify-between p-6">
    <div className="w-32 h-8 bg-white/5 rounded animate-pulse" />
    <div className="flex items-center space-x-4">
      <div className="w-8 h-8 bg-white/5 rounded-lg animate-pulse" />
      <div className="w-8 h-8 bg-white/5 rounded-lg animate-pulse" />
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-white/5 rounded-full animate-pulse" />
        <div className="w-24 h-4 bg-white/5 rounded animate-pulse" />
      </div>
    </div>
  </div>
);