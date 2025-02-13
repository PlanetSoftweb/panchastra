import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { TableRowSkeleton } from '../../components/admin/SkeletonLoader';

interface WaitlistEntry {
  id: string;
  email: string;
  timestamp: any;
}

function AdminWaitlist() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWaitlist();
  }, []);

  const fetchWaitlist = async () => {
    try {
      const q = query(collection(db, 'waitlist'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const waitlistData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as WaitlistEntry[];
      setEntries(waitlistData);
    } catch (error) {
      console.error('Error fetching waitlist:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Waitlist</h2>
        <div className="text-gray-400">
          Total Signups: {entries.length}
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="space-y-4 p-4">
              {[...Array(5)].map((_, index) => (
                <TableRowSkeleton key={index} />
              ))}
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Signup Date</th>
                  <th className="p-4 font-medium">Position</th>
                </tr>
              </thead>
              <tbody>
                {entries.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-4 text-center text-gray-400">
                      No signups yet
                    </td>
                  </tr>
                ) : (
                  entries.map((entry, index) => (
                    <tr key={entry.id} className="border-b border-white/5">
                      <td className="p-4">{entry.email}</td>
                      <td className="p-4">
                        {new Date(entry.timestamp?.toDate()).toLocaleDateString()}
                      </td>
                      <td className="p-4">#{index + 993}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminWaitlist;