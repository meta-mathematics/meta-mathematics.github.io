# Chinese remainder theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** NT-03  
**Level:** Intermediate    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For pairwise coprime integers $m_1,\ldots,m_k\ge2$ and arbitrary integer residues $r_1,\ldots,r_k$, prove that

$$x\equiv r_i\pmod{m_i}\qquad(1\le i\le k)$$

has a solution unique modulo $M=m_1\cdots m_k$, and construct it explicitly.

**Foundations and permitted imports:**

Import NT-01’s Bézout identity and inverse criterion: if gcd(u,m)=1, an integer t satisfies ut≡1 mod m. Euclid’s lemma follows from Bézout as in NT-02; finite prime factorization may be used to check coprimality of partial products. All moduli are positive and ≥2.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Local inverse certificates
N2 [v1] Global construction
  N1 -- E1: M_i t_i≡1 mod m_i for each i. --> N2
N3 [v1] Uniqueness and export
  N1 -- E1: M_i t_i≡1 mod m_i for each i. --> N3
  N2 -- E2: The displayed integer x satisfies all prescribed congruences. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | M_i t_i≡1 mod m_i for each i. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T1-3 | N1/v1, E1 | M_i t_i≡1 mod m_i for each i. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | The displayed integer x satisfies all prescribed congruences. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Local inverse certificates

**Object, role, and local target:** Separate one modulus from its complementary product. The required export is: M_i t_i≡1 mod m_i for each i.

**Inputs:** Pairwise coprime m_i; M=∏m_i; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-03.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Pairwise coprime m_i; M=∏m_i; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Separate one modulus from its complementary product. |
| Sense | Pairwise coprimality is stronger than gcd of all moduli being 1. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** M_i t_i≡1 mod m_i for each i. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Global construction

**Object, role, and local target:** Use terms that vanish at all other moduli. The required export is: The displayed integer x satisfies all prescribed congruences.

**Inputs:** Local inverse certificates and arbitrary residues r_i; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-03.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Local inverse certificates and arbitrary residues r_i; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Use terms that vanish at all other moduli. |
| Sense | Check the jth term as well as cross-terms; arbitrary residues need not be coprime. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** The displayed integer x satisfies all prescribed congruences. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Uniqueness and export

**Object, role, and local target:** Prove product divisibility before stating a residue class. The required export is: Existence, explicit construction, and uniqueness modulo M.

**Inputs:** Two solutions; pairwise coprimality; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `NT-03.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Two solutions; pairwise coprimality; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Prove product divisibility before stating a residue class. |
| Sense | Uniqueness is modulo M, not uniqueness as an integer. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Existence, explicit construction, and uniqueness modulo M. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Local inverse certificates

1. Set M_i=M/m_i.

2. If a prime divided both M_i and m_i, Euclid’s lemma applied to M_i would make it divide another modulus, contradicting pairwise coprimality.

3. Hence gcd(M_i,m_i)=1.

4. Bézout supplies integers t_i,s_i with t_iM_i+s_im_i=1.

5. Construct this certificate separately for every i.

### §4.N2 — Global construction

1. Define x=∑_i r_iM_it_i.

2. Fix j.

3. For i≠j the factor m_j divides M_i, so its term is zero modulo m_j.

4. The jth term is r_j modulo m_j by its inverse certificate.

5. Therefore x≡r_j mod m_j for every j, proving existence without solving a coupled search problem.

### §4.N3 — Uniqueness and export

1. If x,y are solutions each m_i divides d=x−y.

2. If coprime a,b both divide d, write d=ak.

3. From b|ak and gcd(a,b)=1, Bézout implies b|k; thus ab|d.

4. Inductively the product M divides d, since every next modulus is coprime to the preceding product.

5. Conversely x+ℓM satisfies all congruences.

6. The complete solution set is exactly one residue class modulo M.

## 5. Worked instance and boundary audit

For x≡2 mod3, x≡3 mod5, x≡2 mod7, M=105. Complementary products are 35,21,15 with inverses 2,1,1. Thus x=2·35·2+3·21+2·15=233≡23 mod105. Direct checks give 23≡2,3,2 at the three moduli.

**Boundary or failed-argument audit:**

For moduli 2 and 4, residues 0 and 1 are incompatible. Residues 0 and 2 are compatible but give uniqueness modulo4, not8. Sense rejects using the pairwise-coprime construction unchanged; a generalized CRT needs compatibility modulo the gcd and modulus lcm, which is a different contract.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `NT-03`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
