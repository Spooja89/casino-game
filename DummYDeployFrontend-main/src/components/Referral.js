import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Referral = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = `${window.location.origin}/?ref=${Cookies.get('referralCode') || 'DEMO123'}`;

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Error copying link:', err);
    }
  };

  return (
    <div className="referral-container p-6 bg-gray-900 text-white rounded shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Invite Your Friends!</h2>
      <p className="mb-2">Share this referral link:</p>

      <div className="flex items-center mb-3">
        <input
          type="text"
          value={referralLink}
          readOnly
          className="flex-grow p-2 mr-2 rounded bg-gray-700 text-white"
        />
        <button
          onClick={copyReferralLink}
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
        >
          Copy
        </button>
      </div>

      {copied && <p className="text-green-400 text-sm mb-4">Referral link copied!</p>}

      <h3 className="text-xl font-semibold mt-6 mb-2">Your Referral Tree</h3>

      {/* HARD-CODED STRUCTURED TREE */}
      <pre className="bg-gray-800 text-green-400 p-4 rounded whitespace-pre-wrap font-mono text-sm">
{`
Alice (ALICE123)
/       \\
Bob     (empty)

  Dhoni (DHONI001)
       |
 Newuser123 (NEWUSER123)

Sachin (SACHIN001)
/         \\
Rahul     Dravid
`}
      </pre>
    </div>
  );
};

export default Referral;
